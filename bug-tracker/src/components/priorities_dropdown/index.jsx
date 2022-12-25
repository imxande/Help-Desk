import React from "react";
import { DropDown, Group, Item } from "./style";


const PriorityDropDown = () =>
{
    return (
        <>
            <DropDown>
                <Group>
                    <Item>High</Item>
                    <Item>Medium</Item>
                    <Item>Low</Item>
                </Group>
            </DropDown>
        </>
    );
};

export default PriorityDropDown;
