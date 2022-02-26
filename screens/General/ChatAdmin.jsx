import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Message, MsgInput, SendMsgButton } from "../../components/_partials";
import { SocketContext } from "../../contexts/Socket";
import { AuthContext } from "../../contexts/Auth";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#dfdbdb",
  },
  messageEntry: {
    flexDirection: "row",
    alignItems: "center",
    height: "15%",
  },
  messages: {
    height: "85%",
  },
  noMessages: {
    justifyContent: "center",
    alignItems: "center",
  },
  textForNoMessages: {
    fontWeight: "bold",
    marginHorizontal: 10,
    textAlign: "center",
    fontSize: 18,
  },
});

export default function ChatAdmin({ InCaseOfBlank }) {
  let scrollRef;
  let { currentUserInfo } = useContext(AuthContext);
  let { socket } = useContext(SocketContext);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    socket.emit("getWithAdminMsg", { _id: currentUserInfo._id }, (messages) => {
      setMessages(messages);
    });
    scrollRef.scrollToEnd({animated:true})
  },[currentUserInfo])
  useEffect(() => {
    socket.on("newAdminMsg", ({ message }) =>{
      setMessages([...messages, message]) 
      scrollRef.scrollToEnd({animated:true})}
  );
  }, [messages])




  let handleSendMsg = () => {
    socket.emit(
      "messageToAdmin",
      { senderId: currentUserInfo._id, content: value },
      (message) => {
        setMessages([...messages, message]);
        setValue("");
        scrollRef.scrollToEnd({animated:true})
      }
    );
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper}>
        <View
          style={[
            styles.messages,
            messages.length == 0 ? styles.noMessages : null,
          ]}
        >
          {messages.length == 0 ? (
            <Text style={styles.textForNoMessages}>
              {InCaseOfBlank ?? "Commence a discuter avec Wampi"}
            </Text>
          ) : (
            <FlatList
              data={messages}
              ref={(ref)=scrollRef=ref}
              keyExtractor={(item) => item._id}
              keyboardDismissMode={true}
              renderItem={({ item }) => (
                <Message
                  content={item.content}
                  incommingMsg={item.by != currentUserInfo._id}
                  username={
                    item.by != currentUserInfo._id
                      ? "w"
                      : currentUserInfo.username
                  }
                />
              )}
            />
          )}
        </View>
        <View style={styles.messageEntry}>
          <MsgInput setValue={setValue} value={value} />
          <SendMsgButton sendMsg={handleSendMsg} />
        </View>
      </View>
    </View>
  );
}
