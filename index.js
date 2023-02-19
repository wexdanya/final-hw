const wrapper = document.getElementById("wrapper");

fetch("./data/data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data || data.length > 0) {
      //chosed array
      const choosedActors = [];
      //titlte
      const title = document.createElement("h1");
      title.setAttribute("class", "title");
      title.innerText = "Actors";
      wrapper.append(title);
      //actors list
      const actorsList = document.createElement("div");
      actorsList.setAttribute("class", "actorsList");
      wrapper.append(actorsList);
      //render actors
      data.forEach(({ profilePicture, firstName, lastName, contacts, id }) => {
        if (firstName.length > 0) {
          //actor card
          const actorCard = document.createElement("div");
          actorCard.setAttribute("class", "actorCard");
          actorsList.append(actorCard);
          actorCard.addEventListener("click", () => {
            if (!choosedActors.find((e)=> e.id === id)){
              choosedActors.push({profilePicture,firstName,lastName,contacts,id})
              console.log(choosedActors);
            }
          });
          //actor image
          const img = new Image();
          img.src = `${profilePicture}`;

          //actor name
          const actorName = document.createElement("p");
          actorName.setAttribute("class", "actorName");
          actorName.append(firstName + " " + lastName);

          //social networks links
          const links = document.createElement("ul");
          links.setAttribute("class", "links");
          //links render
          contacts.forEach((e) => {
            //list item
            const li = document.createElement("li");
            //list item link
            const a = document.createElement("a");
            a.setAttribute("href", `${e}`);
            a.setAttribute("target", "_blank");
            //chossing the svg
            if (e.includes("instagram")) {
              const img = document.createElement("img");
              img.src = "./assets/svg/insta.svg";
              img.setAttribute("class", "socialLink");
              a.append(img);
            } else if (e.includes("facebook")) {
              const img = document.createElement("img");
              img.src = "./assets/svg/facebook.svg";
              img.setAttribute("class", "socialLink");
              a.append(img);
            } else if (e.includes("twitter")) {
              const img = document.createElement("img");
              img.src = "./assets/svg/twitter.svg";
              img.setAttribute("class", "socialLink");
              a.append(img);
            }
            li.append(a);
            links.append(li);
          });
          //if image exist , render all
          img.onload = () => {
            const actorImage = document.createElement("img");
            actorImage.setAttribute("class", "actorImage");
            actorImage.src = `${profilePicture}`;
            actorCard.append(actorImage);
            actorCard.append(actorName);
            actorCard.append(links);
          };
          //if img doesn`t exist usin initials
          img.onerror = () => {
            //show initials
            const actorInitials = document.createElement("div");
            actorInitials.setAttribute("class", "actorInitials");
            actorInitials.append(firstName[0] + lastName[0]);
            actorCard.append(actorInitials);
            actorCard.append(actorName);
            actorCard.append(links);
          };
        }
      });
      const choosedActorsSection = document.createElement('div')
      choosedActorsSection.setAttribute('class','choosedActors')
      choosedActorsSection.innerText = "you choosed"
      wrapper.append(choosedActorsSection)
    }
  })
  .catch((e) => {
    const showError = document.createElement("h2");
    showError.setAttribute("class", "showError");
    showError.innerText = `Somthing wrong, try it latter.`;
    wrapper.append(showError);
  });
