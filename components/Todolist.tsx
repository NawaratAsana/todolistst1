import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import ButtonComponent from "./Button";
import { useRouter } from "next/router";
import Link from "next/link";
import { Input } from "antd";


const TodoList = ({ }) => {
  const router = useRouter()
  const [userInput, setUserInput] = useState('');
  const [todolist, setTodoList] = useState([]);
  const [isEdit, setIsEdit] = useState({
    status: false,
    value: "",
    position: 0,
  });

  const handleSubmit = (condition: string) => {
    let newTodolist: any = [...todolist];
    if (condition === "add") {
      newTodolist.push(userInput as never);
      setTodoList(newTodolist);
      setUserInput("");
    }
    if (condition === "edit") {
      newTodolist[isEdit.position] = isEdit.value;
      setTodoList(newTodolist);
      setIsEdit({ status: false, value: "", position: 0 });
    }
    return;
  };

  const handleDelete = (index: any) => {
    // remove list
    let newTodolist = [...todolist];
    newTodolist = newTodolist.filter((e, i) => i !== index);
    setTodoList(newTodolist);
  };

  return (
    <div >
      <div style={{ display: "inline-flex", flex: 2 }}>
        <Input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <ButtonComponent
          name="Submit"
          onClick={() => (handleSubmit("add"))}
        />
      </div>

      {/* <button onClick={() => isEdit ? setIsEdit() : handleSubmit("add")}>Submit</button> */}
      {todolist?.map((e, index) => {
        return (
          <div style={{ fontSize: 20 }} >
            {isEdit?.status === true && isEdit.position === index ? (
              <Input
                value={isEdit.value}
                onChange={(e) => {
                  let newIsEdit = { ...isEdit, value: e.target.value };
                  setIsEdit(newIsEdit);
                }}
              />
            ) : (
              <p>{e}</p>
            )}
            <ButtonComponent className={styles.grid}
              name={
                isEdit?.status === true && isEdit.position === index
                  ? "Cancel"
                  : "Delete"
              }
              onClick={() => {
                if (isEdit?.status === true && isEdit.position === index) {
                  setIsEdit({
                    status: false,
                    value: "",
                    position: 0,
                  });
                } else {
                  handleDelete(index);
                }
              }}
            />

            <ButtonComponent
              name={
                isEdit?.status === true && isEdit.position === index
                  ? "Submit"
                  : "Edit"
              }
              onClick={() => {
                if (isEdit?.status === true && isEdit.position === index) {
                  handleSubmit("edit");
                } else {
                  setIsEdit({
                    status: true,
                    value: e,
                    position: index,
                  });
                }
              }}
            />
            <ButtonComponent
              name="Detail"
              onClick={() =>
                //  router.push(`/detail?data=${e}`)
                router.push({
                  pathname: '/detail',
                  query: { keyword: e },
                }
                )

              }
            />
          </div>
        );
      })}

    </div>
  );
};

export default TodoList;

