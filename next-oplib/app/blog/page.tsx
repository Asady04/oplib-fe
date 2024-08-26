'use client'
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/react";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Blog</h1>
      <div className="flex flex-wrap gap-4 items-center mt-7">
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="faded">
          Faded
        </Button>
        <Button color="primary" variant="bordered">
          Bordered
        </Button>
        <Button color="primary" variant="light">
          Light
        </Button>
        <Button color="primary" variant="flat">
          Flat
        </Button>
        <Button color="primary" variant="ghost">
          Ghost
        </Button>
        <Button color="primary" variant="shadow">
          Shadow
        </Button>
      </div>
    </div>
  );
}
