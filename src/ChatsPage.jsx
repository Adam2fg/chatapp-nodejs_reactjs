import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {

    return (
        <div style={{ height: '100vh' }}>
             <PrettyChatWindow
      projectId="1c97c885-6fec-403a-94b5-f1e84afb0add"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100%' }}
    />
        </div>
    )
}

export default ChatsPage