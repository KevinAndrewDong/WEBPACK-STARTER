import axios from "axios";

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios
    .get("https://api.vvhan.com/api/joke?type=json", config)
    .then((res) => (document.getElementById("joke").innerHTML = res.data.joke));
}

export default generateJoke;
