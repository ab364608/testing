import React from 'react';
import ReactDOM from 'react-dom';
import {act, Simulate} from 'react-dom/test-utils';
import StudentQuestions from '../components/StudentQuestions';
import App from '../App';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
    container = null;
})

function addQuestion() {
    const input = container.querySelector("input");
    input.value = "Question 1"
    Simulate.change(input);
    Simulate.click(container.querySelector("button.ask-button"));
}

test(`"StudentQuestions" component should render its props correctly`, () => {
    act(() => {
        ReactDOM.render(<StudentQuestions questions={["How are you?", "Are you dumb or stupid?", "Why are you still here?"]} />, container);
    });

    const h1 = container.querySelector("h1");
    expect(h1.textContent).toBe("1: How are you?");
    const h1Two = container.querySelector("h1:nth-child(2)");
    expect(h1Two.textContent).toBe("2: Are you dumb or stupid?");
    const h1Three = container.querySelector("h1:nth-child(3)");
    expect(h1Three.textContent).toBe("3: Why are you still here?")
});


test("Updates when a new question is asked", () => {
    act(() => {
        ReactDOM.render(<App />, container);
    });

    addQuestion();
    const h1 = container.querySelector("h1");
    expect(h1.textContent).toBe("1: Question 1");
});

test("Removes question when answer button is clicked", () => {
    act(() => {
        ReactDOM.render(<App />, container);
    });

    addQuestion();
    const answerButton = container.querySelector("#answer-button");
    Simulate.click(answerButton);
    expect(container.querySelectorAll("h1").length).toBe(0);
});