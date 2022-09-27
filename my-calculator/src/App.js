
import "./App.css";
 import Wrapper from "./components/Wrapper";
import Buttonbox from "./components/ButtonBox";
import Button from "./components/Button";
import Screen from "./components/screen";


const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

function App() {
    return (


        <div className="App">
            <Wrapper>
                <Screen />
                <Buttonbox>
                    {btnValues.flat().map((btn, i) => (
                        <Button value={btn} key={i} />
                    ))}

                </Buttonbox>
            </Wrapper>
        </div>


    );



} 

 
export default App;
