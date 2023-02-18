const wrapper = document.getElementById("wrapper");

fetch("./data/data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data) {
        const title = document.createElement("h1");
        title.setAttribute('class','title')
        title.innerText= 'Actors';
        wrapper.append(title);
        const actorsList = document.createElement('div');
        actorsList.setAttribute('class','actorsList')
        wrapper.append(actorsList)
        data.forEach((element) => {
          if (element) {
            const actorImage = document.createElement('img');
            actorImage.setAttribute('class','actorImage')
            actorImage.src = `${element.profilePicture}`
            console.log(element);
            actorsList.append(actorImage);
          }
        });
    }

  });
