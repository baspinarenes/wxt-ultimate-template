import { MessageProtocol } from "./protocol";

export type StateOnly<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? never : K]: T[K];
};

export type TopicString = keyof MessageProtocol;

export type Message<T extends TopicString = TopicString> = {
  topic: T;
  value: MessageProtocol[T] extends { message: infer M } ? M : undefined;
};

export type ReturnType<T extends TopicString = TopicString> =
  MessageProtocol[T] extends { return: infer R } ? R : void;

export type AnyMessage = {
  [K in TopicString]: Message<K>;
}[TopicString];
