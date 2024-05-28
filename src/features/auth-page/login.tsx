"use client";
import { AI_NAME } from "@/features/theme/theme-config";
import { signIn } from "next-auth/react";
import { FC } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface LoginProps {
  isDevMode: boolean;
}

export const LogIn: FC<LoginProps> = (props) => {
  return (
    <Card className="flex gap-2 flex-col min-w-[300px] items-center">
      <CardHeader className="gap-2">
        <CardTitle className="text-2xl flex gap-2 justify-center w-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={"wcmacai-icon.png"} />
          </Avatar>
          <span className="text-primary">{AI_NAME}</span>
        </CardTitle>
        <CardDescription className="text-center">
          Por gentileza, faça o login com sua conta wcMAC
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 items-center justify-center">
        <Button onClick={() => signIn("azure-ad")} className="w-full text-center">Microsoft 365</Button>
        {props.isDevMode ? (
          <Button onClick={() => signIn("localdev")} className="w-full text-center">
            Basic Auth (DEV ONLY)
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
};
