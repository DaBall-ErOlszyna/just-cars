
async function get_files() {
  return await (await fetch("images.json")).json();
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

(async ()=>{

  const files = await get_files(); // array of authors and their images

  console.log(files);

  var files_all = [];

  for(var file of files) {
    var author = file[0];
    var images = file[1];

    for(var image of images) {

      files_all.push([author,image]);
      
    }
    
  }
  shuffle(files_all);
  var html_full = "";
  for(var file of files_all) html_full += `<tr><td>By: ${file[0]}</td><td><img src="pictures/${file[1]}"></td></tr>`;
  document.getElementById("pictures").innerHTML = html_full;
})();
