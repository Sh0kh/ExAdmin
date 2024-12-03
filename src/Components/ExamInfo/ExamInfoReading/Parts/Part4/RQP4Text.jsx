import { useState } from "react";

export default function RQP4Text() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div className="mb-[20px]">
            <button
                onClick={handleOpen}
                className="w-full p-[10px] rounded-[10px] bg-MainColor text-white"
            >
                Matn
            </button>

            <div
                className={`Modal ${isOpen ? "open" : ""}`}
                onClick={handleClose}
            >
                <div
                    className={`Modal2Content ${isOpen ? "open" : ""}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-[20px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum distinctio maiores neque vel obcaecati, ipsum nam illum velit animi aliquid ex reiciendis soluta, sunt et corrupti consequuntur, error voluptas perspiciatis quis iusto quam laudantium provident impedit accusamus. Odio, delectus consectetur vel sint perferendis quos et, tempora totam fugiat tenetur velit?

                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dicta error dolorum nemo ullam nobis non voluptates nihil vel suscipit accusantium quo, velit unde eos sint corporis delectus, eius earum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reprehenderit tempora repudiandae porro. Laborum facilis rerum omnis quia sit fuga nam sequi nisi ipsa soluta? Nemo enim nobis delectus praesentium!
                        
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus maiores unde modi odio ipsum illum quam eligendi nihil beatae quia, obcaecati reprehenderit officia inventore excepturi similique eveniet. Consequatur, sapiente, vero distinctio unde nostrum voluptate beatae, quia vitae dolor quas molestiae!
                    </div>
                </div>
            </div>
        </div>
    );
}
