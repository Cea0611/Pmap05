const API_URL = "http://192.168.50.141:4000/api/users/all";
const xhr = new XMLHttpRequest();
async function onRequestHandler() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.response);
        const data = JSON.parse(this.response);
        var list = document.createElement("ul");
        data.map(item => {
            var li = document.createElement("li");
            var link = document.createElement("a");
            link.href = "/display_position?coordinates=" + item.latestLongitude + "," + item.latestLaltitude;
            link.innerHTML = item.name;
            li.appendChild(link)
            list.appendChild(li);
        });
        var listDiv = document.getElementById('objects');
        listDiv.appendChild(list);
    }
}
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", API_URL);
xhr.send();