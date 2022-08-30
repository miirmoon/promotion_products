import { apiGetPromotionTags } from "apis/promotion";
import useSwipe from "hooks/useSwipe";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IPromotionTag } from "types/IPromotion";

export default function PromotionTabs(props: {
  select: number;
  onClick: Function;
}) {
  const [tags, setTags] = useState<IPromotionTag[]>([]);

  const tagsRef = useRef<HTMLUListElement>(null);
  useSwipe(tagsRef);

  useEffect(() => {
    apiGetPromotionTags().then((res) => {
      setTags(res);
    });
  }, []);

  return (
    <TabBox>
      <Tabs ref={tagsRef}>
        <Tab isSelected={props.select === -1} onClick={() => props.onClick(-1)}>
          전체
        </Tab>
        {tags.map((tag) => {
          return (
            <Tab
              key={tag.id}
              isSelected={props.select === tag.id}
              onClick={() => props.onClick(tag.id)}
            >
              {tag.title}
            </Tab>
          );
        })}
      </Tabs>
    </TabBox>
  );
}

const TabBox = styled.div`
  padding: ${(props) => props.theme.boxSize.micro}
    ${(props) => props.theme.boxSize.medium} 0;
  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey01};
`;

const Tabs = styled.ul`
  width: 100%;
  display: flex;
  transform: translate(0, 0);
`;

const Tab = styled.li<{ isSelected?: boolean }>`
  margin-right: ${(props) => props.theme.boxSize.medium};
  padding-bottom: ${(props) => props.theme.boxSize.micro};
  white-space: nowrap;
  color: ${(props) =>
    props.isSelected ? props.theme.colors.black : props.theme.colors.grey15};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) =>
    props.isSelected
      ? props.theme.fontWeight.bold
      : props.theme.fontWeight.normal};
  border-bottom: ${(props) => (props.isSelected ? "2px solid" : "none")};
  cursor: pointer;
`;
