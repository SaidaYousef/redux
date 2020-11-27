import { useSelector, useDispatch } from "react-redux";
import { Button, ListGroup } from "react-bootstrap";
import { checkTask, deleteTask } from "../JS/actions/actionTask";
import EditTask from "./EditTask";

const TaskList = () => {
  const list = useSelector((state) => state.list);
  const filtred = useSelector((state) => state.filtred);

  const dispatch = useDispatch();

  return (
    <ListGroup>
      {(filtred ? list.filter((el) => el.isDone === true) : list).map(
        (item, key) => (
          <ListGroup.Item
            key={key}
            style={{ display: "flex", justifyItems: "center", marginLeft:"35%", marginTop:"40px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30%",
              }}
            >
              <Button
                variant="outline-secondary"
                onClick={() => dispatch(checkTask(item))}
              >
                {item.isDone ? "isDone" : "unDone"}
              </Button>
              <EditTask Item={item} />
              <Button
                variant="danger"
                onClick={() => dispatch(deleteTask(item.id))}
              >
                Delete
              </Button>
            </div>
            <p style={{ margin: "0px" }} className={item.isDone ? "check" : ""}>
              {item.text}
            </p>
          </ListGroup.Item>
        )
      )}
    </ListGroup>
  );
};

export default TaskList;