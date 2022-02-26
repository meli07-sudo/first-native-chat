import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Message, MsgInput, SendMsgButton } from "./../../components/_partials";
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

export default function ChatPanel({ InCaseOfBlank, interlocutor }) {
  let { socket } = useContext(SocketContext);
  let { currentUserInfo } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  let scrollRef;

  useEffect(() => {
    socket.emit(
      "getOurMsg",
      { id1: currentUserInfo._id, id2: interlocutor._id },
      (messages) => {
        setMessages(messages);
        scrollRef.scrollToEnd({animated:true})
      }
    );
  }, [interlocutor]);

  useEffect(()=>{
    socket.on("newMessage", ({ message }) =>{
      setMessages([...messages, message])
      scrollRef.scrollToEnd({animated:true})
    });
  },[messages])

  let handleSendMsg = () => {
    socket.emit(
      "sendMessage",
      {
        senderId: currentUserInfo._id,
        receiverId: interlocutor._id,
        content: value,
      },
      (message) => {
        setMessages([...messages, message]);
        setValue("");
        scrollRef.scrollToEnd({animated:true})
      }
    );
  };
  return (
    <View style={styles.wrapper}>
      {/* <StatusBar /> */}
      <View style={styles.wrapper}>
        <View
          style={[
            styles.messages,
            messages.length == 0 ? styles.noMessages : null,
          ]}
        >
          {messages.length == 0 ? (
            <Text style={styles.textForNoMessages}>
              {InCaseOfBlank ?? "Aucun message pour l'instant"}
            </Text>
          ) : (
            <FlatList
              data={messages}
              ref={(ref)=>scrollRef=ref}
              keyExtractor={(item) => item._id}
              keyboardDismissMode={true}
              renderItem={({ item }) => (
                <Message
                  content={item.content}
                  incommingMsg={item.by != currentUserInfo._id}
                  username={
                    item.by != currentUserInfo._id
                      ? interlocutor.username
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
