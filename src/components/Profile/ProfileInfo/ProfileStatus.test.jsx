import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus component",() => {
    test('Status test',() => {
        const component = create(<ProfileStatus status="My status" />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("My status")
    })

    test('after creation <span> with correct should be displayed',() => {
        const component = create(<ProfileStatus status="My status" />)
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe("My status")
    })

    test('after creation <input> should not be displayed',() => {
        const component = create(<ProfileStatus status="My status" />)
        const root = component.root


        expect(() => {
            let input = root.findByType("input")
        }).toThrow()
    })
    test('input should be displayed in editMode instead of span',() => {
        const component = create(<ProfileStatus status="My status" />)
        const root = component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("My status")
    })
})