import Message from '@/components/Message/Message';
import MessageHeader from '@/components/Message/MessageHeader';
import WriteMessage from '@/components/Message/WriteMessage';

const page = () => {
  return (
    <div className="relative w-full min-h-full dark:bg-background-slate dark:text-gray-300">
      <MessageHeader />
      <div className="overflow-x-auto pb-[5rem]">
        <div className="mt-[7rem] px-4">
          <Message
            name="Mahedi Hasan"
            timestamp={1684556154837}
            message="Hello, how are you?"
            own={false}
          />
          <Message
            name="Mahedi Hasan"
            timestamp={1684556154837}
            message="Hello, how are you?"
            own
          />
          <Message
            name="Mahedi Hasan"
            timestamp={1684556154837}
            message="Hello, how are you?"
            own={false}
          />
          <Message
            name="Mahedi Hasan"
            timestamp={1684556154837}
            message="Hello, how are you?"
            own
          />
          <Message
            name="Mahedi Hasan"
            timestamp={1684556154837}
            message="Hello, how are you?"
            own={false}
          />
          <Message
            name="Mahedi Hasan"
            timestamp={1684556154837}
            message="Hello, how are you?"
            own
          />
          <Message
            name="Mahedi Hasan"
            timestamp={1684556154837}
            message="Hello, how are you?"
            own={false}
          />
          <Message
            name="Mahedi Hasan"
            timestamp={1684556154837}
            message="Hello, how are you?"
            own
          />
          <Message
            name="Mahedi Hasan"
            timestamp={1684556154837}
            message="Hello, how are you?"
            own={false}
          />
          <Message
            name="Mahedi Hasan"
            timestamp={1684556154837}
            message="Hello, how are you?"
            own
          />
        </div>
      </div>
      <div className="fixed bottom-0 w-full z-10 h-[3.5rem] bg-white dark:bg-background-slate ">
        <WriteMessage />
      </div>
    </div>
  );
};

export default page;
