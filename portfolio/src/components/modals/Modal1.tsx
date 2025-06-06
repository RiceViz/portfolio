// components/modals/Planet1Modal.tsx
export const Planet1Modal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md text-black relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-black text-xl"
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold mb-2">About Me</h2>
      <p className="text-gray-700">
        I&apos;m a software engineer with a passion for creativity and clean code.
      </p>
    </div>
  </div>
);