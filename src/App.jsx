import {useState} from "react";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todoValue, setTodoValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todoValue === "" || todoValue === " ") {
            return;
        }
        setTodoList([...todoList, todoValue]);
        setTodoValue("");
    };

    const handleDeleteTodo = (index) => {
        // todoList에서 자워야되는 대상을 지우는 것
        // 지워야되는 대상을 특정하려면?
        // 클릭을 한 대상, event가 일어난 대상은 button임. "밥먹기"라는 글자도 아니고, li도 아님

        // 버튼을 통해서는 우리가 삭제해야 하는 "밥먹기"라는 그 대상 자체, 인덱스 번호를 가져올 수 있는 방법이 없음

        // 아래에 onclick이 부분에 함수 안의 함수 형태로 바꾸어, index 번호를 받는 handleDeleteTodo 함수로 버꿨음
        // 결론 : handleDeleteTodo 함수가 해야하는 일은 들어온 index 번호를 받아 todoList의 값을 변경하는 일을 해야함

        // filter (0)      => 걸러낸다    index가 아닌 애들만 남기면 됨
        const result = todoList.filter((item,index) => {return target !== index});
        // 1순회 때 "밥먹기"  -> index : 0    -> 조건인 1 !== 0  -> true  -> result에 "밥먹기" 포함됨
        // 2순회 때 "잠자기"  -> index : 1    -> 조건인 1 !== 1  -> false  -> 걸러짐
        // 3순회 때 "공부하기"  -> index : 2    -> 조건인 1 !== 2  -> true  -> result에 "공부하기" 포함됨

        setTodoList(result);
};

    return (
        <>
            <h1>My ToDo ({todoList.length})</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    placeholder={"Write your to do..."}
                    onChange={(event)} => {
                    setTodoValue(event.target.value)
                }
                    value={todoValue}
                    />
                    <button type="submit">Add To Do</button>
            </form>
            <hr />
            <ul>
                {todoList.map((item, index) => <li key={index}>
                  {item}
                  <button onClick={() => {
                      handleDeleteTodo(index);
                  }}>❌</button>
                {todoList.map((item, index, array) => {return <li>{item}</li>})}
            </ul>

       );

export default App;