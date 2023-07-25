import { BasicResponse } from "./types";
import { IhelloController } from "./interfaces";
import { LogSuccess } from "@/utils/logger";

export class HelloController implements IhelloController {

    public async getMessage(name?: string): Promise<BasicResponse> {
        LogSuccess('[api/hello] Get Request');

        return {
            message: `Hello ${name || "world!"}`
        }
    
    }

}