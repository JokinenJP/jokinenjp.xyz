import { describe, expect, test } from "vitest";
import dummyFunction from "./dummy,";

describe('Dummy function', () => {
    test('Dummy function returns true', () => {
        expect(dummyFunction()).toBe(true)
    })
})
