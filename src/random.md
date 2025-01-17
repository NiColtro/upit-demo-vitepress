---
layout: page
---

<script setup>
import { ref } from 'vue'
import moment from 'moment'

const number = ref(null)
const timestamp = ref('')

const generate = () => {
  fetch("https://nmfafk7ln7.execute-api.eu-central-1.amazonaws.com/v1/randomNumber")
    .then(async (response) => {
      const data = await response.json()

      console.log('API Response', data)

      number.value = data.number
      timestamp.value = moment(data.timestamp).format('DD/MM/YYYY HH:mm:ss')
    })
}
</script>

<div class="center">
  <span class="number">{{ number }}</span>
  <span class="timestamp">{{ timestamp }}</span>

  <button @click="generate()" class="btn">Generate</button>
</div>

<style>
.center {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.btn {
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #5672CD;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}

.number {
  font-size: 64px;
  font-weight: bold;
  color: #5672CD;
}

.timestamp {
  margin-top: 20px;
  font-size: 20px;
  font-weight: light;
  color: #3C3C43;
}
</style>