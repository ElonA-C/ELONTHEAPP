    <!--  I startd by putting a a big /View comppont in order to put all the stuff that will be seen in the app "on the screen" -->
      </View>
      <!-- we repesent the image in a way of array so the user could run though it  -->
      <Image source={images[numarray]["image"]} style={styles.randompicture} />

<!--  I use styles.randompicture for the pictures to create the size of the picture and center it  -->
<!-- we use TouchableOpacity to interact with the user, using that we can control all the function I have created, and check condition -->

      <TouchableOpacity
        onPress={() => {
          changePresses(numPresses + 1);
          Timer();
          if (numarray == x) {
            changearray(0);
          }
        }}

<!--  I use a style for a button  -->

        style={styles.Buttonpositon}
      >
      <!--  style for the button "Random text. -->
        <Text style={styles.buttonTEXT}>Random</Text>
        <Text style={styles.sectionTitleb}>
          Total pictures showed {numPresses}
        </Text>
      </TouchableOpacity>
    </View>

);
};

const styles = StyleSheet.create({
contanier: {

<!-- I used flex in order layout the app  -->

flex: 1,

<!--  we use the backgroundcolor in order to change the background color to someting cooler like light black -->

backgroundColor: "#07121B",
},
mainConatinerStyle: {

<!-- I center the iteam himeslf and then control his moveing it several pixles -->

flexDirection: "column",
flex: 1,
justifyContent: "center",
alignSelf: "center",
right: 160,
top: 0,
},

buttonTEXT: {

<!--  I play with the font size along with the position and the coloar of the text -->

fontSize: 45,
color: "#B9AAFF",
height: 100,
},

sectionTitle: {
flex: 1,

<!--  we stick the title to the top useing paddingtop, along with center it and change size -->

paddingTop: StatusBar.currentHeight,
color: "red",
padding: 8,
fontSize: 40,
fontWeight: "600",
alignSelf: "center",
},

Buttonpositon: {

<!--  we center the object along with changeing height, with a been "realative" to the another objects -->

position: "relative",
height: 200,
alignItems: "center",
justifyContent: "center",
},

sectionTitleb: {

<!-- We use color, to change the color text, fontsize and weight to change the size of texxt and bold it a bit, along with playting with height. -->

flex: 1,
color: "blue",
padding: 8,
fontSize: 24,
fontWeight: "600",
height: 100,
},
randompicture: {

<!-- we use width and height in order to control the picture size, we center the picture with alignSelf and moveing it a bit up using margin-->

marginTop: 10,
width: "80%",
height: "57%",
alignSelf: "center",
},
});
