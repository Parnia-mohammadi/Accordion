import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const data = [
  {
    id: 1,
    title: "Accordion one",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi excepturi perferendis dignissimos, illum quaerat voluptate dolore quis facere dolor error quam vitae non assumenda, iure eos et vel temporibus officiis. ",
  },
  {
    id: 2,
    title: "Accordion two",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed itaque necessitatibus voluptates nesciunt animi deleniti? Laudantium totam blanditiis sapiente, molestias vero vitae reiciendis ducimus, sit amet incidunt hic excepturi harum?",
  },
  {
    id: 3,
    title: "Accordion three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consequatur corrupti ratione soluta? Facere accusamus adipisci magnam? Expedita, laboriosam nisi voluptas itaque ullam hic maiores sit commodi, ex ipsam cumque?",
  },
];

function Accordion() {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setIsOpen((is) => !is)}
      >
        <div>{item.title}</div>
        {/* first way
        inline style when state changed */}
        {/* <ChevronDownIcon
          style={{
            width: "1.2rem",
            transition: "all 0.3s ease-in-out",
            rotate: isOpen ? "180deg" : "0deg",
          }}
        /> */}
        {/* second way */}
        <ChevronDownIcon className="accordion-item__chevron"/>
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
}
