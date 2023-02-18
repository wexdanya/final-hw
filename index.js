const wrapper = document.getElementById("wrapper");

fetch("./data/data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data) {
      const title = document.createElement("h1");
      title.setAttribute("class", "title");
      title.innerText = "Actors";

      const actorsList = document.createElement("div");
      actorsList.setAttribute("class", "actorsList");

      wrapper.append(title)
      wrapper.append(actorsList)

      data.forEach(({ profilePicture ,firstName, lastName }) => {
        const img = new Image();
        img.src = `${profilePicture}`;
        img.addEventListener(
          "load",
          function () {
            const actorCard = document.createElement("div")
            actorsList.append(actorCard);
            actorCard.setAttribute('class',"actorCard")
            const actorName = document.createElement('p')
            actorName.setAttribute('class',"actorName")
            actorName.append(firstName +" "+lastName)
            img.setAttribute("class", "actorImage");
            img.setAttribute("alt", `123`);
            actorCard.append(img);
            actorCard.append(actorName)
          }
        );
      });
    }
  });
