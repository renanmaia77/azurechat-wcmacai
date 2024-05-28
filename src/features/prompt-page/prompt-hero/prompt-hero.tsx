"use client";
import { Hero, HeroButton } from "@/features/ui/hero";
import { Book, BookImage, NotebookPen } from "lucide-react";
import { promptStore } from "../prompt-store";

export const PromptHero = () => {
  return (
    <Hero
      title={
        <>
          <Book size={36} strokeWidth={1.5} /> Prompt Library
        </>
      }
      description={
        "Um prompt para IA generativa é uma instrução ou pergunta que orienta a IA a produzir uma resposta ou conteúdo específico. Ter prompts pré-definidos garante consistência nas respostas, economiza tempo e esforço, além de melhorar a precisão e a relevância das respostas geradas."
      }
    >
      <HeroButton
        title="Adicionar um novo prompt"
        description="Crie seu próprio template de promot"
        icon={<Book />}
        onClick={() => promptStore.newPrompt()}
      />
      <HeroButton
        title="Whimsical City"
        description="Image of miniature colourful city "
        icon={<BookImage />}
        onClick={() =>
          promptStore.updatePrompt({
            createdAt: new Date(),
            id: "",
            name: "Whimsical City",
            description:
              "Create A miniature city with colourful buildings and green trees with [iconic building]. The [iconic building] is in the centre of the image, surrounded by a blurred background with lots of [Native tree name] trees. The image has a dreamy and whimsical mood, with a shallow depth of field and a high angle view. The city looks like a toy or a model, with different styles and shapes of buildings.",
            isPublished: false,
            type: "PROMPT",
            userId: "",
          })
        }
      />
      <HeroButton
        title="Problem Framing"
        description="Problem Framing for a new product"
        icon={<NotebookPen />}
        onClick={() =>
          promptStore.updatePrompt({
            createdAt: new Date(),
            id: "",
            name: "Problem Framing",
            description: `
Given the following problem statement:
[PROBLEM STATEMENT]

Generate a response with the following points:
1. Problem framing
2. Solution overview and recommendations 
3. List down the recommended MVP Scope
4. How to ensure user adoption
5. How to measure success 
8. List down similar products
9. Potential sponsor question (5 questions) 
              `,
            isPublished: false,
            type: "PROMPT",
            userId: "",
          })
        }
      />
    </Hero>
  );
};
