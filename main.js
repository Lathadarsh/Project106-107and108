//https://teachablemachine.withgoogle.com/models/L829KlOnn/model.json
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/L829KlOnn/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
