My App

I created an app where the user can generate "Random" pictures from a list of 8 pictures. At the top left, you will see a button- that has been pressed. It will show the user a message with a description of the app.
I add a countdown that will go off when the user presses Random- when the countdown hits 0, the pictures will change.
In addition, I added a counter button that counts the number of times the user pressed randomly. Thus, every three the user presses the random button. An alert message will be shown, with a "nice line" and the total number of clicks.

The most important parts of the app are the "countdown" and the array of pictures.

const [images, setImages] = useState([
{ id: "1", image: require("./1.jpg") },
{ id: "2", image: require("./2.jpg") },
{ id: "3", image: require("./3.jpg") },
{ id: "4", image: require("./4.jpg") },
{ id: "5", image: require("./5.jpg") },
{ id: "6", image: require("./6.jpg") },
{ id: "7", image: require("./7.jpg") },
{ id: "8", image: require("./8.jpg") },
]);

In this code, I build an array with a "map" integer. I give every download id number that will be used to change pictures.

let y = 0;
let w = () => {
setCounter((counter) => {
if (counter == 0) {
clearInterval(y);
return 3;
}
return counter - 1;
});
};
// we will set interval of counter- going down 1 sec at a time.
const Timer = () => {
if (counter > 0) {
y = setInterval(w, 1000);
} else {
setCounter(counter + 3);
}
};

In those lines, I create a counter that will go down by 1 every one sec, I had to use setInterval for it, but in order to stop the computer from going blew 0- which is my reset number, I had to "clean" the interval.

Another important line is

<!-- <Image source={images[numarray]["image"]} style={styles.randompicture} /> -->

which represent the pictures using an array that moves with a number -"numarray" that change when the user pressed random
