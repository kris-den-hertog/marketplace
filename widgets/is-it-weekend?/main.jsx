//scriptwidget
//
//https://scriptwidget.app
//https://krisdh.dev
//
//is-it-weekend? - EN version

var friday = 4; //weekends starts friday, change to 5 if you want it to start saturday
var date = new Date();
var day = date.getDay();

var backgroundColorTop = day > friday ? "green" : "red"; // if statement for gradient
var backgroundColorBottom = day > friday ? "#54E220" : "#FF6161";


// create gradient
let linearGradient = {
    type: "linear",
    colors: [backgroundColorTop, backgroundColorBottom],
    startPoint: "left",
    endPoint: "bottom",
};

$render(
    <vstack
        background={$gradient(linearGradient)}
        frame="max, leading"
        alignment="leading"
    >
        <hstack padding="10">
            <vstack alignment="leading">
                <text font="20" color="white">
                    Is it the weekend?
                </text>
            </vstack>
            <spacer />
        </hstack>
        // if statement for "absolutely" or "nope"
        <text font="25" color={day > friday ? "#068406" : "#A80404"} padding="10">
            {day > friday ? "absolutely 🥳" : "Nope 😳"}
        </text>
        <text font="text" color="white" padding="10">
            {day > friday ? "Hooray weekend 😁" : "hang on a bit longer 🫡"}
        </text>


    </vstack>
);
