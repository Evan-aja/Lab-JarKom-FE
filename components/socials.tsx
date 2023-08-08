// @ts-ignore
const Socials = ({ url, svg, alt }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button className="bg-white drop-shadow-lg filter: hover:drop-shadow-xl text-black font-bold h-10 w-10 py-3 px-3 rounded-full">
        {svg}
      </button>
    </a>
  );
};

export default Socials;
