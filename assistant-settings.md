# AI Assistants

::: tip Overview
Manage your AI assistants through a centralized interface. View, add, edit, and configure assistants for different development tasks.
:::

## Assistant Dashboard

![Assistant List](./image/aidevx/assistant-settings.png)

<div class="assistant-grid">
  <div class="assistant-card">
    <h4>📋 Generate Requirements</h4>
    <ul>
      <li>Creates URS, SRS, SDS documentation</li>
      <li>OpenAI Verified ✓</li>
      <li>Status: Active</li>
    </ul>
  </div>

  <div class="assistant-card">
    <h4>💻 Generate Frontend Code</h4>
    <ul>
      <li>Produces code from requirements</li>
      <li>OpenAI Verified ✓</li>
      <li>Status: Active</li>
    </ul>
  </div>

  <div class="assistant-card">
    <h4>📚 Create User Manual</h4>
    <ul>
      <li>Generates manuals from SRS/SDS</li>
      <li>OpenAI Verified ✓</li>
      <li>Status: Active</li>
    </ul>
  </div>

  <div class="assistant-card">
    <h4>🎨 Build HTML Prototype</h4>
    <ul>
      <li>Creates HTML from specifications</li>
      <li>OpenAI Verified ✓</li>
      <li>Status: Active</li>
    </ul>
  </div>

  <div class="assistant-card">
    <h4>💬 Chat with Document</h4>
    <ul>
      <li>Document interaction & analysis</li>
      <li>OpenAI Verified ✓</li>
      <li>Status: Active</li>
    </ul>
  </div>

  <div class="assistant-card">
    <h4>📄 Generate SDS Document</h4>
    <ul>
      <li>Creates structured SDS docs</li>
      <li>OpenAI Verified ✓</li>
      <li>Status: Active</li>
    </ul>
  </div>
</div>

## Managing Assistants

### Adding New Assistant
![Add Assistant](./image/aidevx/assistant-settings-add.png)

Required fields for new assistant:
1. **Name** - Assistant identifier
2. **Description** - Purpose and capabilities
3. **Type** - Assistant category
4. **OpenAI Assistant ID** - Integration ID
5. **Status** - Active/Inactive setting

### Editing Assistant
![Edit Assistant](./image/aidevx/assistant-settings-edit.png)

Editable properties:
- Assistant name
- Description
- Assistant type
- OpenAI configuration
- Status settings

### Removing Assistant
![Delete Assistant](./image/aidevx/assistant-settings-delete.png)

Deletion process:
1. Click delete button
2. Confirm deletion in dialog
3. Assistant and data removed

::: warning Important Notes
- Verify OpenAI integration before activation
- Deletion cannot be undone
- Keep assistant IDs secure
:::

<style>
.assistant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.assistant-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background: #f8f9fa;
}

.assistant-card h4 {
  margin-top: 0;
  color: #5E17EB;
}

.assistant-card ul {
  padding-left: 1.2rem;
  list-style-type: none;
}

.assistant-card ul li {
  margin-bottom: 0.5rem;
}
</style>

For more information about using assistants, visit the [Platform Overview](./platform-overview.md) section. 