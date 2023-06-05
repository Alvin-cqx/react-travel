import React from "react";
import { Image, Typography } from "antd";
interface propsType {
    id: string | number;
    size: "large" | "small";
    title: string;
    imageSrc: string;
    price: string;
}
export const ProductImage: React.FC<propsType> = ({
    id,
    size,
    title,
    imageSrc,
    price,
}) => {
    return (
        <div style={{marginRight:10}}>
            {size === "large" ? (
                <Image src={imageSrc} height={285} width={"100%"} />
            ) : (
                <Image src={imageSrc} height={120} width={"100%"} />
            )}
            <div>
                <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
                <Typography.Text type="danger" strong>
                    ¥ {price} 起
                </Typography.Text>
            </div>
        </div>
    );
};
