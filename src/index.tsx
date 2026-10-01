import { LaunchProps } from "@raycast/api";
import { createAndCopyAlias } from "./utils/create";
import { openApiKeySetup } from "./utils/invalid-key";

export default async function Command(props: LaunchProps<{ arguments: Arguments.Index }>) {
  await createAndCopyAlias(props.arguments.note, async (toast) => {
    await toast.hide();
    await openApiKeySetup();
  });
}
