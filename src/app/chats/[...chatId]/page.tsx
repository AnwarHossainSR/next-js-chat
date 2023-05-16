import Message from '@/components/Message/Message';
import MessageHeader from '@/components/Message/MessageHeader';
import WriteMessage from '@/components/Message/WriteMessage';

const page = () => {
  return (
    <div className="relative w-full min-h-full">
      <MessageHeader />
      <div className="overflow-x-auto pb-[5rem]">
        <div className="mt-[7rem] px-4">
          <Message
            name="Mahedi Hasan"
            timestamp="21435436"
            message="Hello, how are you?"
            bg="bg-[#F0F4F9]"
            own={false}
          />
          <Message
            name="Mahedi Hasan"
            timestamp="21435436"
            message="Hello, how are you?"
            bg="bg-[#DDFFEC]"
            own
          />
          <Message
            name="Mahedi Hasan"
            timestamp="21435436"
            message="Hello, how are you?"
            bg="bg-[#F0F4F9]"
            own={false}
          />
          <Message
            name="Mahedi Hasan"
            timestamp="21435436"
            message="Hello, how are you?"
            bg="bg-[#DDFFEC]"
            own
          />
          <Message
            name="Mahedi Hasan"
            timestamp="21435436"
            message="Hello, how are you?"
            bg="bg-[#F0F4F9]"
            own={false}
          />
          <Message
            name="Mahedi Hasan"
            timestamp="21435436"
            message="Hello, how are you?"
            bg="bg-[#DDFFEC]"
            own
          />
          <Message
            name="Mahedi Hasan"
            timestamp="21435436"
            message="Hello, how are you?"
            bg="bg-[#F0F4F9]"
            own={false}
          />
          <Message
            name="Mahedi Hasan"
            timestamp="21435436"
            message="Hello, how are you?"
            bg="bg-[#DDFFEC]"
            own
          />
          <Message
            name="Mahedi Hasan"
            timestamp="21435436"
            message="Hello, how are you?"
            bg="bg-[#F0F4F9]"
            own={false}
          />
          <Message
            name="Mahedi Hasan"
            timestamp="21435436"
            message="Hello, how are you?"
            bg="bg-[#DDFFEC]"
            own
          />
        </div>
      </div>
      <div className="fixed bottom-0 w-full z-10 h-[3.5rem] bg-white">
        <WriteMessage />
      </div>
    </div>
  );
};

export default page;
