/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "@polkadot-cloud/core/css/base/modal/CanvasScroll/index.css";

/**
 * @name CanvasScroll
 * @summary Modal scrollable container. Limits max width of container to an opinionated 800px;
 */
export const CanvasScroll = ({ children, ...rest }: ModalAnimationProps) => (
  <motion.div className="canvas-scroll" {...rest}>
    {children}
  </motion.div>
);
