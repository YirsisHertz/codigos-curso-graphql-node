import { FormEvent, useEffect, useState } from "react";

import { useMutation, useSubscription } from "@apollo/client";

import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";

import { SEND_MESSAGE, SEND_MESSAGE_SUBSCRIPTION } from "../gql/messages";

const client = uuid();

export const useMessage = () => {
  const [sendMessageFunction] = useMutation(SEND_MESSAGE);

  const [messages, setMessages] = useState<any[]>([]);

  const [messageInput, setMessageInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  const { data, error, loading } = useSubscription(SEND_MESSAGE_SUBSCRIPTION);

  useEffect(() => {
    if (messages.length === 0 && loading) return;

    console.log(data);

    setMessages([data?.sendMessage, ...messages]);
  }, [data]);

  const handleInputChange = (e: any) => {
    const newValue = e.target.value;

    setMessageInput(newValue);

    if (newValue.trim().length > 0) {
      setIsValid(true);
      return;
    }

    setIsValid(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isValid || messageInput.trim().length === 0) {
      Swal.fire("Error", "El mensaje no puede estar vacio", "error");
      return;
    }

    await sendMessageFunction({
      variables: {
        input: {
          to: client,
          from: uuid(),
          text: messageInput,
        },
      },
    });

    setMessageInput("");
  };

  return {
    error,
    handleSubmit,
    handleInputChange,
    client,
    messageInput,
    isValid,
    loading,
    messages,
  };
};
