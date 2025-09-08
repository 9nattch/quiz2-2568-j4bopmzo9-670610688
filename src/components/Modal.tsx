import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

type AddFoodModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string,
    price: number | string,
    quantity: number | string,
    category: string
  ) => void;
};

export default function AddFoodModal({onAdd}: AddFoodModalProps) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | string>(0);
  const [quantity, setQuantity] = useState<number | string>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {
    if(!name.trim())return;
    setName("");
  
  };
 
  

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (

    /* Type additional text here. */
      <Stack>
      <TextInput
        label="Name of item"
        withAsterisk
        description="Name of item"
        error = {!name.trim()&& "Name of item is required"}
        value = {name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <NumberInput
       mt="sm"
        label="Price per dish"
        withAsterisk
        description="Price per dish"
        min={0}
        value = {price}
        onChange={setPrice}
        

      />
      <NumberInput
        mt="sm"
        label="Quantity"
        withAsterisk
        description="Quantity"
        min={0}
        value = {quantity}
        onChange={setQuantity}
      />
      <Select
      className="form-select"
      onChange={setCategory}
      value = {category}

      />

      <Button type="submit" mt="sm" onClick={handleSubmit}>
        Submit
      </Button>
      </Stack>

  );
}
