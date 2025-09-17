import { MessageProtocol } from "~/models/protocol";
import { Message, ReturnType, TopicString } from "~/models/types";
import { getCurrentTab } from "./tab";

// Helper type for message parameter
type MessageParam<T extends TopicString> = MessageProtocol[T] extends {
  message: infer M;
}
  ? M
  : undefined;

export const sendMessage = async <T extends TopicString>(
  topic: T,
  message?: MessageParam<T>
): Promise<ReturnType<T>> => {
  return await browser.runtime.sendMessage({
    topic,
    value: message,
  } as Message<T>);
};

export const sendMessageToActiveTab = async <T extends TopicString>(
  topic: T,
  message?: MessageParam<T>
): Promise<ReturnType<T>> => {
  const tab = await getCurrentTab();
  return await sendMessageToTab(tab.id, topic, message);
};

export const sendMessageToTab = async <T extends TopicString>(
  tabId: number,
  topic: T,
  message?: MessageParam<T>
): Promise<ReturnType<T>> => {
  return await browser.tabs.sendMessage(tabId, {
    topic,
    value: message,
  } as Message<T>);
};

export const onMessage = async <T extends TopicString>(topics: {
  [K in T]: (
    message: MessageParam<K>
  ) => ReturnType<K> | Promise<ReturnType<K>>;
}) => {
  const handler = async (message: Message<T>) => {
    const topicHandler = topics[message.topic as T];
    if (topicHandler) {
      return await topicHandler(message.value);
    } else {
      return undefined;
    }
  };

  browser.runtime.onMessage.addListener(handler);

  return () => browser.runtime.onMessage.removeListener(handler);
};
