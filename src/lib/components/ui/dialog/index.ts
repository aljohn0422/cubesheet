import { Dialog as DialogPrimitive } from "bits-ui";

import Content from "./dialog-content.svelte";
import Header from "./dialog-header.svelte";
import Overlay from "./dialog-overlay.svelte";
import Title from "./dialog-title.svelte";

const Root = DialogPrimitive.Root;
const Trigger = DialogPrimitive.Trigger;
const Portal = DialogPrimitive.Portal;

export { Root, Trigger, Portal, Overlay, Content, Header, Title };
