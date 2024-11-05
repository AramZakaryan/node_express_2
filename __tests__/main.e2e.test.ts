import {app} from "../src/main";
import {agent} from "supertest";


const req = agent(app)


describe('Test main', () => {
    it("some logic", async () => {

            const res = await req
                .get('/')
                .expect(200)

            expect(res.text).toBe("hello page")


        }
    )
})