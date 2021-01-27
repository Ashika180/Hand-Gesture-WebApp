Webcam.set({
    height: 400,
    width: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});

cam1 = document.getElementById("cam1");

function show_gestures(){
    document.getElementById("signs").style.visibility = "visible";
document.getElementById("gif").style.display = "none";
document.getElementById("cam1").style.display = "inline-block";
    Webcam.attach("#cam1");
}

function next_page(){
    window.location = "fade.html";
}

function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("pic_invisible").innerHTML = "<img id= 'captured_image' src= " + data_uri + ">";   
    });
}

console.log("ml5 version", ml5.version);

function save(){
    dp = document.getElementById("captured_image").src;
localStorage.setItem("Display Pic", dp);

id = document.getElementById("name").value;
localStorage.setItem("Name", id);
}
