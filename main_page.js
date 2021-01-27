prediction1 = "";
prediction2 = "";

pic = localStorage.getItem("Display Pic");
document.getElementById("dp").src = pic;

name = localStorage.getItem("Name");
document.getElementById("p1").innerHTML = "<label id= 'name'> Welcome " + name + "!";  ;
document.getElementById("p1").style.color = "black";

Webcam.set({
    width: 400,
    height: 300,
    image_format: 'jpg',
    jpg_quality: 90 
    });

    Webcam.attach("camera");

    function Take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("snap").innerHTML = "<img id= 'captured_img' src= '" + data_uri + "'>";
    })
}

console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0CGkqv05t/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function speak(){
    speech = window.speechSynthesis;
    line1 = "The first prediction is " + prediction1;
    line2 = "The second prediction is " + prediction2;
    utterThis = new SpeechSynthesisUtterance(line1 + line2);
    speech.speak(utterThis);
}



function identify_emotion(){
image = document.getElementById("captured_img");
classifier.classify(image, got_Result);
}

function got_Result(error, result){

    if(error){
console.log("Error.");
    }

    else{
        console.log(result);
        document.getElementById("result_1").innerHTML = result[0].label;
        document.getElementById("result_2").innerHTML = result[1].label;
        prediction1 = result[0].label;
        prediction2 = result[1].label;
        speak();

        if(result[0].label == "Thumbs Up"){
            document.getElementById("updated_1").innerHTML = "&#128077;";
        }

        if(result[0].label == "Peace"){
            document.getElementById("updated_1").innerHTML = "&#9996;";
        }

        if(result[0].label == "Great"){
            document.getElementById("updated_1").innerHTML = "&#128076;";
        }

        if(result[0].label == "Horn Fingers"){
            document.getElementById("updated_1").innerHTML = "&#129304;";
        }

        if(result[0].label == "Pointing Right"){
            document.getElementById("updated_1").innerHTML = "👉";
        }

        if(result[0].label == "Clenched Fist"){
            document.getElementById("updated_1").innerHTML = "&#9994;";
        }


        if(result[1].label == "Thumbs Up"){
            document.getElementById("updated_2").innerHTML = "&#128077;";
        }

        if(result[1].label == "Peace"){
            document.getElementById("updated_2").innerHTML = "&#9996;";
        }

        if(result[1].label == "Great"){
            document.getElementById("updated_2").innerHTML = "&#128076;";
        }

        if(result[1].label == "Horn Fingers"){
            document.getElementById("updated_2").innerHTML = "&#129304;";
        }

        if(result[1].label == "Pointing Right"){
            document.getElementById("updated_2").innerHTML = "👉";
        }

        if(result[1].label == "Clenched Fist"){
            document.getElementById("updated_2").innerHTML = "&#9994;";
        }
    }

}
