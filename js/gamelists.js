fetch("https://gamertocoder.garena.co.th/api/minigames")
  .then((response) => {
    if (response.status !== 200) {
      return response.status;
    }
    return response.json();
  })
  .then((data) => {
    if (typeof data == "number") {
      alert(data);
    } else {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        const currentData = data[i];
        const newListItem = document.createElement("li");
        newListItem.classList.add("card");
        const genre_array = currentData.genre;
        let genre_string = "<span>" + genre_array[0] + "</span>";
        if (genre_array.length > 1) {
          for (let j = 1; j < genre_array.length; j++) {
            genre_string = genre_string + "<span>" + genre_array[j] + "</span>";
          }
        }
        const html =
          '<img src="' +
          currentData.icon +
          '"/>' +
          "<div class=coninfo>" +
          "<div class=mcon>" +
          '<div class="typeofgame">' +
          genre_string +
          "</div>" +
          '<div class="name" onclick="changeName(' +
          currentData.name +
          ')">' +
          currentData.name +
          "</div>" +
          '<div class="detail">' +
          currentData.description +
          "</div>" +
          "</div>" +
          "</div>";
        html.trim();
        newListItem.innerHTML = html;
        document.getElementById("list").appendChild(newListItem);
      }
    }
  });
