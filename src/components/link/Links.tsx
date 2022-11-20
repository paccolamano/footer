import { For, Show } from "solid-js";
import Link from "./Link";

const Links = (props) => {
  const { title, links } = props;
  return (
    <>
      <Show when={ links.length > 0 } keyed>
        <h5 class="white-text">{title}</h5>
        <ul>
          <For each={ links }>{(link, i) =>
            <li>
              <Link path={link.path} displayName={link.name} />
            </li>
          }</For>
        </ul>
      </Show>
    </>
  )
}

export default Links;