import React, { useState } from "react";
import toast from "react-hot-toast";

const RegisterModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_AI_ENDPOINT}/register`,
        // `https://dev-backend.planmytax.ai/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone: phoneNumber }),
          credentials: "include",
        }
      );
      if (response.ok) {
        console.log("Registration successful");
        toast.success("Authenticated!");
        onClose();
      } else {
        const data = await response.json();
        setError(data.message || "Failed to register");
      }
    } catch (error) {
      console.error("Error registering:", error);
      setError("Failed to register");
    }
  };

  return (
    <div
      className={`fixed inset-0 ${
        isOpen ? "" : "hidden"
      } flex items-center justify-center z-50`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg p-8 mx-4 md:mx-0 md:max-w-md w-full">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold">
            Register with your mobile number
          </h2>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm"
              placeholder="Enter your 10-digit mobile number"
              maxLength={10}
              required
            />
          </div>
          {error && <div className="text-red-600 text-sm mb-4">{error}</div>}
          <div className="text-center w-full">
            <button
              type="submit"
              className="w-1/3 inline-block bg-zinc-700 text-white px-4 py-2 rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50"
            >
              Register
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-1/3 inline-block bg-gray-300 text-gray-700 px-4 py-2 rounded-lg ml-2 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
