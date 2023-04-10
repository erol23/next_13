import Link from "next/link";

async function fetchRepoContents(name) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

  const res = await fetch(
    `https://api.github.com/repos/erol23/${name}/contents`
  );
  const data = await res.json();
  return data;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir")

  return <>
  <h3>Directories</h3>
  <ul>
    {dirs.map(dir => <li key={dir.path}>
        <Link href={`/code/repos/${name}/${dir.path}`}>
            {dir.path}
        </Link>
    </li>)}
  </ul>
  </>;
};

export default RepoDirs;
