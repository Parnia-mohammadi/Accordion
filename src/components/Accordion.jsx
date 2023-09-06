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
  const [open, setOpen] = useState(null);
  const handleOpen = (id) => {
    setOpen(open==id? null: id);
  };
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          id={item.id}
          onOpen={handleOpen}
          open={open}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        id={4}
        title={"another Accordion"}
        onOpen={handleOpen}
        open={open}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          nostrum magnam id nulla consequuntur quia quaerat ex quas quae
          voluptas aspernatur odio nisi, similique, inventore amet molestiae
          repellat itaque deleniti.
        </p>
        <ul>
          <li>hi</li>
          <li>bye</li>
        </ul>
        <a href="#">a link</a>
        <p>we can add anything in children props.</p>
      </AccordionItem>
    </div>
  );
}

export default Accordion;

function AccordionItem({ title, id, children, onOpen, open }) {
  const isOpen = open == id;
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div className="accordion-item__header" onClick={() => onOpen(id)}>
        <div>{title}</div>
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
        <ChevronDownIcon className="accordion-item__chevron" />
      </div>
      <div className="accordion-item__content">{children}</div>
    </div>
  );
}
