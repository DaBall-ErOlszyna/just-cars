
async function get_files() {
  return await (await fetch("images.json")).json();
}

(async ()=>{

  const files = await get_files();

  console.log(files);
  
})();
