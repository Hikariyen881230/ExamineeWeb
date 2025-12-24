import { Box, Stack, } from "@mui/material";
import { Editor } from "@monaco-editor/react";

export default function ExamInput() {
  const initialValueTop = `稀有且瀕臨絕種的櫻花鉤吻鮭是冰河時期遺生物，需有適當蔽蔭、冷冽清淨溪水...`;
  return (
    <Stack direction="column" spacing={3} sx={{ p: 4, minHeight: "50vh" }}>
      <Box sx={(theme)=>({...theme.custom.inputExamStyle.monacaBox,height:{md:150,lg:250,xl:'30vh'}})}>
        <Editor
          height="100vh"
          path="top-editor"
          defaultLanguage="plaintext"
          defaultValue={`${initialValueTop}`}
          theme="vs-dark"
          options={{
            fontSize: 16,
            wordWrap: "on",
            minimap: { enabled: false },
            lineNumbers: "off", // 模仿閱讀器的感覺，關閉行號
            padding: { top: 15, bottom: 15 },
            quickSuggestions: false,
            autoDetectHighContrast: false,
            readOnly: true,
            contextmenu: false,
          }}
          onMount={(editor, monaco) => {
            // 關閉 F1
            editor.addCommand(monaco.KeyCode.F1, () => {});
            // 順便把 Ctrl+Shift+P 也封掉（同樣是 Command Palette）
            editor.addCommand(
              monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyP,
              () => {}
            );
          }}
        />
      </Box>
      <Box sx={(theme)=>({...theme.custom.inputExamStyle.monacaBox,height:{md:150,lg:250,xl:"30vh"}})}>
        <Editor
          height="100vh"
          path="bottom-editor"
          defaultLanguage="plaintext"
          defaultValue=""
          theme="vs-dark"
          options={{
            fontSize: 16,
            wordWrap: "on",
            minimap: { enabled: false },
            lineNumbers: "off", // 模仿閱讀器的感覺，關閉行號
            padding: { top: 15, bottom: 15 },
            quickSuggestions: false,
            autoDetectHighContrast: false,
            contextmenu: false,
          }}
          onMount={(editor, monaco) => {
            // 關閉 F1
            editor.addCommand(monaco.KeyCode.F1, () => {});
            // 順便把 Ctrl+Shift+P 也封掉（同樣是 Command Palette）
            editor.addCommand(
              monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyP,
              () => {}
            );
          }}
        />
      </Box>
    </Stack>
  );
}
